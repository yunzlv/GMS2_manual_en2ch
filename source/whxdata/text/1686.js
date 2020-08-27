rh._.exports({"0":["device_mouse_check_button"],"1":["device_mouse_check_button"],"2":["device_mouse_check_button"],"3":["\n  ","\n  ","\n  ","This function returns ","true"," (1) or ","false"," (0) depending on whether the device that you specify is being used or not. Now, the ","device"," refers to the mouse number, which can be from 0 to ","n"," and this event is triggered when\n    the touch screen of a mobile device is touched - where ","n"," is the maximum number of \"fingers\" that can be touching the screen at once (the maximum number of touches that can be detected will depend very much on the device being used\n    and the OS it runs, but most devices should detect at least up to 4). This function constantly updates every step, and the standard constants of ","mb_left"," and ","mb_right"," can be used to check for either button. Note that ","mb_right","    will only be detected if a double tap touch is detected (this behavior can be disabled using the function ","device_mouse_dbclick_enable()",".","\n  "," ","\n  "," ","\n  ","\n  ","device_mouse_check_button(device, button);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","device","\n        ","The device (from 0 - ","n",") that is being checked","\n      ","\n      ","\n        ","button","\n        ","The button of the device that is being checked.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if device_mouse_check_button(0, mb_left) && device_mouse_check_button(1, mb_left)"," {\n    "," room_goto(rm_Menu);\n    "," }\n  ","\n  ","The above code checks to see if the two touches are being held down at the same time and if they then it goes to another room.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Device Input","\n        ","Next: ","device_mouse_check_button_pressed","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["device_mouse_check_button"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1686"})