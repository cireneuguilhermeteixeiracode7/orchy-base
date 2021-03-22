import { DataTypes, Model } from 'sequelize';

class Queue extends Model {
  static init(sequelize) {
    return super.init(
      {
        id_queue: {
          type: DataTypes.BIGINT,
          defaultValue: DataTypes.DEFAULT,
          primaryKey: true,
          allowNull: true,
          unique: true,
        },
        id_load: {
          type: DataTypes.BIGINT,
          allowNull: false,
          unique: false,
        },
        schedule: {
          type: DataTypes.DATE,
          allowNull: false,
          unique: false,
        },
        status: {
          type: DataTypes.SMALLINT,
          allowNull: false,
          unique: false,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
          field: 'created_at',
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: true,
          field: 'updated_at',
        },
      },
      {
        sequelize,
        // freezeTableName: true,
      },
    );
  }

  static associate(models) {
    this.hasOne(models.Load, { foreignKey: 'id_load', as: 'load' });
  }
}

export default Queue;
