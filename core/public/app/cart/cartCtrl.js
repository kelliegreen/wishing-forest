angular.module('wishingforest').controller('cartCtrl', function ($scope, productSrvc) {

    $scope.cartItems = [];
    $scope.total = 0;

    $scope.totalPrice = function () {
        $scope.total = 0;
        $scope.cartItems.forEach(function (cartitem) {
            $scope.total += cartitem.price;
        });
        return $scope.total;
    };


    $scope.getItems = function (items) {
        $scope.cart.cart.forEach(function (item) {
            productSrvc.getItemsById(item.item).then(function (item) {
                $scope.cartItems.push(item);
                $scope.totalPrice();
            });
        });
    };

    $scope.getCart = function () {
        $scope.cart = productSrvc.getCart();
        $scope.getItems();
    };
    
    
    $scope.getCart();
    $scope.items = $scope.cart.cart;
    // console.log($scope.items);

    $scope.remove = function (item, index) {
        $scope.cartItems = $scope.cartItems.splice(index, 1);
        productSrvc.removeCart({cart: $scope.cartItems});
        $scope.totalPrice();
        $scope.$emit('cartItem', $scope.cartItems.length);
        
        // $scope.items.splice(index, 1);
        // productSrvc.removeCart($scope.cart);
        // $scope.cartItems = [];
        // $scope.getCart();
        // // 
        // 
    };
    
    // $scope.numItems = productSrvc.total();
});