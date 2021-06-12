import { DataTypes, Model } from 'sequelize';
import { sequelize } from 'modules/database';

class Participant extends Model {
  public id!: number;
  public name!: string;
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
    },
  },
  { timestamps: true, tableName: 'participant', sequelize }
);

export default Participant;
