import { Participant, OptionParticipant, SurveyParticipant } from 'models';
import moment from 'moment';

const { Op } = require('sequelize');

// 총 참여자 수
const findAll = async (): Promise<number> => {
  const user = await Participant.count({
    col: 'id',
    distinct: true,
  });
  return user;
};

// 최근 참여자 수
const findLastestParticipants = async (type: string): Promise<number> => {
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
};

// 참여자 생성
const create = async (name: string): Promise<any> => {
  await Participant.create({ name: name });
  return;
};

// 설문 참여
const findByName = async (name: string): Promise<any> => {
  const participant = await Participant.findOne({
    attributes: ['id', 'name'],
    where: {
      name: name,
    },
  });

  return participant;
};

// 조인
const join = async (name: string, surveyId: number): Promise<any> => {
  let surveyParticipant = await Participant.findOrCreate({
    attributes: ['id', 'name'],
    where: {
      name: name,
    },
    defaults: { name: name },
  });

  return { ...surveyParticipant };
};

// 결과 생성
const createAnswers = async (data: any): Promise<any> => {
  await OptionParticipant.bulkCreate(
    data.optionList.map((id: number) => {
      return {
        optionId: id,
        participantId: data.participantId,
      };
    })
  );
};

export default {
  findAll,
  findLastestParticipants,
  create,
  findByName,
  join,
  createAnswers,
};
