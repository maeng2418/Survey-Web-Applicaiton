import { DataTypes, Model } from 'sequelize';
import { sequelize } from 'modules/database';
import Question from './question';
import OptionParticipant from './option-participant';

class Option extends Model {
  public id!: number;
  public title!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Option.init(
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
  { timestamps: true, tableName: 'option', sequelize }
);

Option.belongsTo(Question, {
  targetKey: 'id',
  foreignKey: { name: 'questionId', allowNull: false },
  as: 'question',
});

Option.hasMany(OptionParticipant, {
  sourceKey: 'id',
  foreignKey: { name: 'optionId', allowNull: false },
  as: 'option_participants',
});

export default Option;
