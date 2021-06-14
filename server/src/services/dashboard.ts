import { Survey, Participant, SurveyParticipant } from 'models';
import moment from 'moment';
import { Op } from 'sequelize';

// 최근 설문리스트
const findLastestSurvey = async (): Promise<{ [id: string]: number }> => {
  const surveyList = await Survey.findAll({
    attributes: ['id', 'title'],
    where: {
      id: {
        [Op.between]: [1, 10],
      },
    },
    order: [['createdAt', 'DESC']],
  });

  const surveyParticipantList = await SurveyParticipant.findAll({
    attributes: ['id', 'participantId', 'surveyId'],
    include: { model: Survey, as: 'survey' },
    where: {
      surveyId: {
        [Op.in]: surveyList.map((survey) => survey.id),
      },
    },
  });

  const lastestSurveyParticipants = surveyParticipantList.reduce((acc: any, cur: any): any => {
    if (acc.hasOwnProperty(cur.surveyId)) {
      acc[cur.surveyId]['count'] += 1;
      return acc;
    } else {
      acc[cur.surveyId] = {};
      acc[cur.surveyId]['title'] = cur.survey.title;
      acc[cur.surveyId]['count'] = 1;
      return acc;
    }
  }, {});

  const surveys = surveyList.reduce((acc: any, cur: any) => {
    if (acc.hasOwnProperty(cur.id)) {
      acc[cur.id]['count'] = 0;
      return acc;
    } else {
      acc[cur.id] = {};
      acc[cur.id]['title'] = cur.title;
      acc[cur.id]['count'] = 0;
      return acc;
    }
  }, {});

  return { ...surveys, ...lastestSurveyParticipants };
};

// 총 참여자 수
const findTotalParticipants = async (): Promise<number> => {
  const total = await SurveyParticipant.count({
    col: 'id',
    distinct: true,
  });

  return total;
};

// 최근 7일간 설문자 수
const findWeeklyParticipants = async (): Promise<number[]> => {
  const weeklyList = await SurveyParticipant.findAll({
    attributes: ['id', 'createdAt'],
    where: {
      createdAt: {
        [Op.and]: [
          { [Op.gte]: moment(moment().startOf('week').format('YYYY-MM-DD')).toDate() },
          {
            [Op.lt]: moment(moment().startOf('week').add(7, 'days').format('YYYY-MM-DD')).toDate(),
          },
        ],
      },
    },
  });

  const week = new Array(7).fill(0);
  weeklyList.forEach((data) => {
    week[moment(data.createdAt).day()] += 1;
  });
  return week;
};

export default {
  findLastestSurvey,
  findTotalParticipants,
  findWeeklyParticipants,
};
