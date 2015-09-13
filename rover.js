/*------------------------
    This code runs the robot
    Fwd (time or dist)
    Rev (time or dist)
    Left (degree)
    Right (degree)

*/

var mraa = require('mraa') //possible gpio-admin for RasPi
var wheel1 = new mraa.Gpio(13);
var wheel2 = new mraa.Gpio(12);
var wheel3 = new mraa.Gpio(11);
var wheel4 = new mraa.Gpio(10);
var wheel5 = new mraa.Gpio(9);
var wheel6 = new mraa.Gpio(8);

wheel1.dir(mraa.DIR_OUT);
wheel2.dir(mraa.DIR_OUT);
wheel3.dir(mraa.DIR_OUT);
wheel4.dir(mraa.DIR_OUT);
wheel5.dir(mraa.DIR_OUT);
wheel6.dir(mraa.DIR_OUT);    
    

function forward(int sec){
    wheel1.write(1);
    wheel2.write(1);
    wheel3.write(1);
    wheel4.write(1);
    wheel5.write(1);
    wheel6.write(1);
    sleep.sleep(sec)
}

function reverse(int sec){
    wheel1.write(1);
    wheel2.write(1);
    wheel3.write(1);
    wheel4.write(1);
    wheel5.write(1);
    wheel6.write(1);
    sleep.sleep(sec)
}

function left(int deg){
    //convert degrees to seconds
    //use seconds for event
    wheel1.write(1);
    wheel2.write(1);
    wheel3.write(1);
    wheel4.write(0);
    wheel5.write(0);
    wheel6.write(0);
    sleep.sleep(sec)
}

function right(int deg){
    //convert degrees to seconds
    //use seconds for event    
    wheel1.write(1);
    wheel2.write(1);
    wheel3.write(1);
    wheel4.write(0);
    wheel5.write(0);
    wheel6.write(0);
    sleep.sleep(sec)
}


