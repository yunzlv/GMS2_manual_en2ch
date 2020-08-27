rh._.exports({"0":["surface_set_target_ext"],"1":["surface_set_target_ext"],"2":["surface_set_target_ext"],"3":["\n  ","\n  ","\n  ","This function is for use with the ","Shader Functions"," and sets the MRT (0 - 3) for native level shaders (DX9, DX11, OpenGL).","\n  ","NOTE",": When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should ","ALWAYS"," check that a surface exists using ","surface_exists()","    before referencing them directly.","\n  "," ","\n  ","\n  ","surface_set_target_ext(index, surface_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The render target index to use (from 0 to 3).","\n      ","\n      ","\n        ","surface_id","\n        ","The ID of the surface to use.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","surface_set_target_ext(0, surf);","\n  ","The above code will set the render target 0 to the surface ID indexed in the variable \"surf\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Surfaces","\n        ","Next: ","surface_get_target","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["surface_set_target_ext"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1426"})