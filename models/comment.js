module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
  	'Comment',
    { texto: {
        type: DataTypes.STRING,
        validate: { notEmpty: {msg: "-> Falta Comentario"}}
      },
      publicado: {
      	type: DataTypes.BOOLEAN,
      	defaultValue: false
      }
    } ,
				{
					classMethods: {	
						countAll: function () {
							return this.count(); // cuenta todos los comentarios
						},
						countCommented: function () {
							return this.aggregate('QuizId', 'count',{ distinct: true }); // cuenta el numero de quizId diferentes
						},
						countUnpublished: function () {
		    				return this.aggregate('QuizId', 'count', {'where': { 'publicado': false }}); // cuenta los no publicados
		    			},
						countPublished: function () {
							return this.aggregate('publicado', 'count', { distinct: false }); // cuenta los publicados
						}	
					}
				});
};