rh._.exports({"0":["gpu_get_blendmode"],"1":["gpu_get_blendmode,bm_normal,bm_add,bm_subtract,bm_max"],"2":["gpu_get_blendmode,bm_normal,bm_add,bm_subtract,bm_max"],"3":["\n  ","\n  ","\n  ","This function can be used to retrieve the current blend mode being used for drawing. The returned value wll be one of the following constants (the default value is ","bm_normal","):","\n  "," ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n        ","Extended Blend Mode","\n      ","\n      ","\n        ","bm_normal","\n        ","Normal blending (the default blend mode).","\n        ","(","bm_src_alpha",", ","bm_inv_src_alpha",")","\n      ","\n      ","\n        ","bm_add","\n        ","Additive blending. Luminosity values of light areas are added.","\n        ","(","bm_src_alpha",", ","bm_one",")","\n      ","\n      ","\n        ","bm_subtract","\n        ","Subtractive blending. Luminosity values of light areas are subtracted.","\n        ","(","bm_zero",", ","bm_inv_src_colour",")","\n      ","\n      ","\n        ","bm_max","\n        ","Max blending. Similar to additive blending.","\n        ","(","bm_src_alpha",", ","bm_inv_src_colour",")","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","gpu_get_blendmode();","\n  "," ","\n  ","\n  ","Constant (see above for constants)","\n  "," ","\n  ","\n  ","if gpu_get_blendmode() != bm_normal","     {\n    ","     gpu_set_blendmode(bm_normal);\n    ","     }\n  ","\n  ","The above code gets the current blend mode and if it is not ","bm_normal"," it is set to that constant.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GPU Control","\n        ","Next: ","gpu_get_blendmode_ext","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gpu_get_blendmode"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1264"})