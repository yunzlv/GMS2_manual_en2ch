rh._.exports({"0":["physics_set_friction"],"1":["physics_set_friction"],"2":["physics_set_friction"],"3":["\n  ","\n  ","\n  ","When you bind a fixture to an instance using ","physics_fixture_bind()"," this returns an \"id\" for the bound fixture. You can use this id to set the friction value of the bound fixture, ","not","    the \"base\" fixture, at any time using this function. Note that the friction is usually set to a value between 0 and 1, but you can use any non-negative value if required.","\n  "," ","\n  ","\n  ","physics_set_friction(fixture, friction)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","fixture","\n        ","the id of the bound fixture","\n      ","\n      ","\n        ","friction","\n        ","the new friction value to apply","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var fric = physics_get_friction(fix_id);"," physics_set_friction(fix_id, fric + 0.1);","\n  ","The code above gets the current friction value for the bound physics properties of the instance and then sets them to a different value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Fixtures","\n        ","Next: ","physics_set_density","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["physics_set_friction"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2104"})