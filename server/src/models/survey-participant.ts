import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../modules/database';
import Participant from './participant';
import Survey from './survey';

class SurveyParticipant extends Model {
  public id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

SurveyParticipant.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
  },
  { timestamps: true, tableName: 'survey_participant', sequelize }
);

export default SurveyParticipant;
