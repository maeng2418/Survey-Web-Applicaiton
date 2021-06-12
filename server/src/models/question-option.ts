import { DataTypes, Model } from 'sequelize';
import { sequelize } from 'modules/database';
import Option from './option';
import { Question } from 'models';

class QuestionOption extends Model {
  public id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

QuestionOption.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
  },
  { timestamps: true, tableName: 'question_option', sequelize }
);

QuestionOption.belongsTo(Question, {
  targetKey: 'id',
  foreignKey: { name: 'questionId', allowNull: false },
  onDelete: 'cascade',
  as: 'question',
});

QuestionOption.belongsTo(Option, {
  targetKey: 'id',
  foreignKey: { name: 'optionId', allowNull: false },
  onDelete: 'cascade',
  as: 'option',
});

export default QuestionOption;
