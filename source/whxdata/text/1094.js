rh._.exports({"0":["layer_background_vtiled"],"1":["layer_background_vtiled"],"2":["layer_background_vtiled"],"3":["\n  ","\n  ","\n  ","Using this function you can change whether the given background element on a layer should be tiled vertically or not. You give the background element ID (which you get when you create a background element using ","layer_background_create()","    or when you use the function ","layer_background_get_id()","), and then set the tiling value. If set to ","true"," then the element will be displayed tiled vertically down the room, and when set to ","false",",\n    the element will not be tiled. This function is for 2D projects only, and will not work correctly when a 3D camera projection is used.","\n  "," ","\n  ","\n  ","layer_background_vtiled(background_element_id, tiled);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","background_element_id","\n        ","The unique ID value of the background element to change","\n      ","\n      ","\n        ","visible","\n        ","The vertical tiling toggle, which can be ","true"," or ","false","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var back = layer_background_get_id(layer);"," if !layer_background_get_htiled(back) || !layer_background_get_vtiled(back)","     {\n    ","     layer_background_htiled(back, true);","     layer_background_vtiled(back, true);","     }\n  ","\n  ","The above code will check the background element assigned to the layer the instance running the code is on and if it is not tiled in either direction it will set it to tile vertically and horizontally.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Background Layers","\n        ","Next: ","layer_background_stretch","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_background_vtiled"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1094"})