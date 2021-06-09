import { DataTypes, Model } from 'sequelize';
import { sequelize } from 'modules/database';
import Question from './question';
import User from './user';
import SurveyParticipant from './survey-participant';

class Survey extends Model {
  public id!: number;
  public title!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Survey.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },
  { timestamps: true, tableName: 'survey', sequelize }
);

Survey.belongsTo(User, {
  targetKey: 'id',
  foreignKey: { name: 'userId', allowNull: false },
  as: 'user',
});

Survey.hasMany(Question, {
  sourceKey: 'id',
  foreignKey: { name: 'surveyId', allowNull: false },
  onDelete: 'cascade',
  as: 'questions',
});

export default Survey;
