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

// 설문 참여
const create = async (data: any): Promise<any> => {
  try {
    const participant = await Participant.create({ name: data.participantName });
    const surveyParticipant = await SurveyParticipant.create({
      participantId: participant.id,
      surveyId: data.surveyId,
    });
    const options = await OptionParticipant.bulkCreate(
      data.optionList.map((id: number) => {
        return {
          optionId: id,
          participantId: participant.id,
        };
      })
    );
    return;
  } catch (err) {
    throw Error(err);
  }
};

export default {
  findAll,
  findLastestParticipants,
  create,
};
