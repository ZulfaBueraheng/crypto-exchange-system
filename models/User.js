module.exports = (sequelize, DataTypes) => {
  return sequelize.define("User", {
    user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    registration_date: DataTypes.DATE,
    balance: DataTypes.FLOAT,
  }, {
    tableName: "users",
    timestamps: false,
  });
};
