import { DataTypes, Model } from 'sequelize';
import { sequelize } from 'modules/database';
import Participant from './participant';
import Option from './option';

class OptionParticipant extends Model {
  public id!: number;
  public title!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

OptionParticipant.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
  },
  { timestamps: true, tableName: 'option_participant', sequelize }
);

OptionParticipant.belongsTo(Option, {
  targetKey: 'id',
  foreignKey: { name: 'optionId', allowNull: false },
  onDelete: 'cascade',
  as: 'option',
});

OptionParticipant.belongsTo(Participant, {
  targetKey: 'id',
  foreignKey: { name: 'participantId', allowNull: false },
  onDelete: 'cascade',
  as: 'participant',
});

export default OptionParticipant;
