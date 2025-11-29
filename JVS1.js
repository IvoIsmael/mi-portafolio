//Definir modulo principal
var app = angular.module('miApp', []);
//controlador 1: ejemplo simple sin variable
app.controller('miCtrl', function($scope){
    $scope.nombre = "Ivo";
});
//Controlador 2: lista dinamica
app.contoller('listaCtrl', function($scope){
    $scope.tareas = ['estudar', 'comer', 'dormir'];
    $scope.agregar = function(){
        if($scope.nuevaTarea && $scope.nuevaTarea.trim() !== ""){
            $scope.tareas.push($scope.nuevaTarea);
            $scope.nuevaTarea = '';
        }
    };
})