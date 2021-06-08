import { DataTypes, Model } from 'sequelize';
import { sequelize } from 'modules/database';
import REGEX from 'utils/validation';
import SurveyParticipant from './survey-participant';
import OptionParticipant from './option-participant';

class Participant extends Model {
  public id!: number;
  public username!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Participant.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      validate: {
        is: REGEX.NAME_REGEX,
      },
    },
  },
  { timestamps: true, tableName: 'participant', sequelize }
);

Participant.hasMany(SurveyParticipant, {
  sourceKey: 'id',
  foreignKey: { name: 'participantId', allowNull: false },
  onDelete: 'cascade',
  as: 'survey_participants',
});

Participant.hasMany(OptionParticipant, {
  sourceKey: 'id',
  foreignKey: { name: 'participantId', allowNull: false },
  onDelete: 'cascade',
  as: 'option_participants',
});

export default Participant;
