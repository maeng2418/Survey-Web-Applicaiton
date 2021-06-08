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

export default OptionParticipant;
