     
    //  https://github.com/Rasel-molla/assingments
      
    
    
    // Kilometer To Meter //



      function kilometerToMeter(kilometer) {
        var meter = kilometer * 1000;
        if (kilometer < 0) {
    
            return 'Error: The value cannot be negative';
        }
        else if (kilometer == undefined) {
            return 'Error: The value cannot be empty';
        }
        else {
    
            return meter;
        }
    }
    
    
    
    function budgetCalculator(watch, phone, laptop) {
        var sum = watch * 60 + phone * 100 + laptop * 400;
        if (watch == undefined || phone == undefined || laptop == undefined) {
          
            return 'Error: You have to give three values';
        }
        else if (watch < 0 || phone < 0 || laptop < 0) {
          
          
            return 'Error: Negative values are not allowed'
        }
        else {
            
            return sum;
        }
    }
    
    
    
    function hotelCost(day) {
    
        var cost = 0;
        if (day <= 5) {
    
            cost = day * 100;
        }
        else if (day <= 10) {
            var firstTenDays = 5 * 100;
            var remaining = day - 5;
            var nextTenDays = remaining * 80;
            cost = firstTenDays + nextTenDays;
        }
        else {
            var firstTenDays = 5 * 100;
            var nextTenDays = 5 * 80;
            var remaining = day - 10;
            var lastDays = remaining * 50;
            cost = firstTenDays + nextTenDays + lastDays;
        }
        return cost;
    }
    
    
    
    function megaFriend(array) {
        var longName = array[0];
        for (var i = 0; i < array.length; i++) {
            var element = array[i];
            if (longName.length < element.length) {
    
    
                longName = element;
            }
        }
        if (longName == undefined) {
    
    
            return 'Error: The array cannot be empty';
        }
        else if (typeof longName == 'number') {
     
            return 'Error: The array cannot be number';
        }
        else {
    
            return longName;
        }
    }