import { DataTypes, Model } from 'sequelize';
import { sequelize } from 'modules/database';

class Question extends Model {
  public id!: number;
  public qeustion!: string;
  public type!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Question.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    question: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    position: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  { timestamps: true, tableName: 'question', sequelize }
);

export default Question;
