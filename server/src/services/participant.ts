import { Participant, OptionParticipant, SurveyParticipant } from 'models';
import moment from 'moment';

const { Op } = require('sequelize');

// 총 참여자 수
const findAll = async (): Promise<number> => {
  try {
    const user = await Participant.count({
      col: 'id',
      distinct: true,
    });
    return user;
  } catch (err) {
    throw Error(err);
  }
};

// 최근 참여자 수
const findLastestParticipants = async (type: string): Promise<number> => {
  try {
    const user = await OptionParticipant.count({
      col: 'participantId',
      where: {
        createdAt: {
          [Op.between]: [
            moment().subtract(7, 'days').format('YYYY-MM-DD'),
            moment().format('YYYY-MM-DD'),
          ],
        },
      },
      distinct: true,
    });
    return user;
  } catch (err) {
    throw Error(err);
  }
};

// 참여자 생성
const create = async (name: string): Promise<any> => {
  try {
    await Participant.create({ name: name });
    return;
  } catch (err) {
    throw Error(err);
  }
};

// 설문 참여
const findByName = async (name: string): Promise<any> => {
  try {
    const participant = await Participant.findOne({
      attributes: ['id', 'name'],
      where: {
        name: name,
      },
    });

    return participant;
  } catch (err) {
    throw Error(err);
  }
};

// 조인
const join = async (participantId: number, surveyId: number): Promise<any> => {
  try {
    let surveyParticipant = await SurveyParticipant.findOne({
      attributes: ['id', 'participantId', 'surveyId'],
      where: {
        participantId: participantId,
      },
    });

    if (surveyParticipant) {
      return false;
    } else {
      surveyParticipant = await SurveyParticipant.create({
        participantId: participantId,
        surveyId: surveyId,
      });
      return true;
    }
  } catch (err) {
    throw Error(err);
  }
};

// 결과 생성
const createAnswers = async (data: any): Promise<any> => {
  try {
    await OptionParticipant.bulkCreate(
      data.optionList.map((id: number) => {
        return {
          optionId: id,
          participantId: data.participantId,
        };
      })
    );
  } catch (err) {
    throw Error(err);
  }
};

export default {
  findAll,
  findLastestParticipants,
  create,
  findByName,
  join,
  createAnswers,
};
