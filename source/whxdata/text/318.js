rh._.exports({"0":["Get Tile Data Transform"],"1":["DnD™ Action - Get Tile Data Transform"],"2":["Get Tile Data Transform"],"3":["\n  ","\n  ","\n  ","With this action you can find out if the tile data for a tile has been transformed in one of three ways: flipped, mirrored or rotated. The tile data is simply a value that reflects the index of the tile along with the transforms applied, and you will\n    normally want to get the tile data first using either ","Get Tile Data In Cell"," or ","Get Tile Data At Pixel"," before using this action. The action will return ","true"," if\n    the chosen transform has been applied to the tile-data, or ","false"," otherwise, and the returned value will then be stored in the target variable which can have been created previously or can be a new temporary one (if you check the \"Temp\"\n    check-box). For more information on tile data, please see the GML section on ","Tile Map Functions",".","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Tile","\n        ","The tile-data for the tile to get the transform from","\n      ","\n      ","\n        ","Transform","\n        ","The the transform to check","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  "," ","\n  ","The above action block code gets the tile data at the mouse position and then\n    checks to see if the tile has had a rotation transform applied to it. If it has then the transform is reset and the tile data sets the tile at the position again.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Actions","\n        ","Next: ","Set Tile Index At Pixel","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Get Tile Data Transform"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"318"})