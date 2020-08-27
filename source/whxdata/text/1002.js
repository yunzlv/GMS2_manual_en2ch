rh._.exports({"0":["room_set_viewport"],"1":["room_set_viewport"],"2":["room_set_viewport"],"3":["\n  ","\n  ","\n  ","With this function you can set the view port properties for any room in your game ","except the current one",". You supply the room index to set the view port in, the view port index (from 0 to 7) and then whether the view port should be visible at\n    the start of the room or not (set to ","true"," to make the port visible, and ","false"," otherwise). After that you set the x and y coordinate (corresponding to the top left position of the view port) and then the width and height in pixels.","\n  "," ","\n  ","\n  ","room_set_viewport(rm, vind, vis, xport, yport, wport, hport);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","rm","\n        ","The index of the room to set","\n      ","\n      ","\n        ","vind","\n        ","The index of the view port to set","\n      ","\n      ","\n        ","vis","\n        ","The visibility of the view port (","true"," is visible, ","false is invisible",")","\n      ","\n      ","\n        ","xport","\n        ","The x position for the view port in the room","\n      ","\n      ","\n        ","yport","\n        ","The y position of the view port in the room","\n      ","\n      ","\n        ","wport","\n        ","The width (in pixels) of the view port","\n      ","\n      ","\n        ","hport","\n        ","The height (in pixels) of the view port","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","global.myroom = room_add();"," room_set_width(global.myroom, 640);"," room_set_height(global.myroom, 480);"," room_set_viewport(global.myroom, 0, true, 0, 0, 640, 480);","\n  ","This will set the view port [0] properties in the room indexed in the variable \"global.myroom\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Rooms","\n        ","Next: ","room_get_viewport","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["room_set_viewport"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1002"})