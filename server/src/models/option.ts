import { DataTypes, Model } from 'sequelize';
import { sequelize } from 'modules/database';

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

export default Option;
