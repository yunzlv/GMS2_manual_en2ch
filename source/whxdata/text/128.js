rh._.exports({"0":["Using Animation Curves"],"1":["Sequences - Animation Curves"],"2":["curves,animation curves"],"3":["\n  ","\n  ","\n  ","An important feature of the ","dope sheet"," is the ability to assign ","Animation Curves"," to parameter tracks within the sequence. When doing this, it is very important that you create\n    your Animation Curve assets with the correct number of channels (curves) for the parameter track you want to target. This means that you will need:","\n  ","\n    ","4 channels for ","colour ","(Channels should be in ","ARGB"," order, and the range for each should be 0 to 255)","\n    ","2 channels for ","position",", ","scale ","and ","origin","\n    ","1 channel for ","rotation",", ","image index"," and ","image speed","\n    ","1 channel for ","pitch ","and ","volume ","(curve values should be between 0 and 1)","\n  ","\n  ","There are two types of animation curves that can be used in your sequences:","\n  ","\n    ","Embedded Curve"," - An embedded animation curve is a unique set of curve data assigned to a specific track in the track panel. An embedded curve can be edited like any other animation curve, but it will not appear in the asset browser,\n      as it is not a stand-alone asset but instead linked only to the track it is applied to.","\n    ","Asset Curve"," - An asset animation curve is one which has been created in the asset browser. These types of curves can be used on multiple different tracks and any changes to the animation curve asset will be propagated across all tracks\n      that use it.","\n  ","\n  ","To add an animation curve asset to a track, you must first give the track the required parameter track, for example, a position or a rotation parameter track. Once that has been added you can use the right mouse button "," menu option ","Set To External Anim Curve ","to open the Asset Explorer and select the required curve from the ones presented to you. Note that ","only those curve assets with the appropriate number of channels for the parameter track being used will be shown",".","\n  ","Once you have added an animation curve to a parameter track, it can then be edited by simply double clicking\n    "," on it, which will open the ","Animation Curve Editor"," for the curve. You can also convert an animation curve into an embedded curve\n    using the right mouse button "," menu option ","Convert To Embedded Anim Curve",". This will disassociate the curve from the asset used,\n    and link it ","only ","to the assigned asset track. You can still edit the curve by double clicking "," on it, but any edits will only be assigned\n    to the curve on the track and nowhere else.","\n  ","Conversely, you can convert an embedded animation curve into an animation curve asset using the right mouse button  menu option Export Embedded Animation Curve. This will convert the embedded curve into a new asset which can then be edited as normal\n    as well as applied to other parameter tracks if required.","\n  ","Animation curves can also be converted into ","keyframe","s",". This option is again available from the right mouse button "," menu, ","Convert To Keys",":","\n  ","It is important to note, however. that there are a couple of caveats associated with doing this:","\n  ","\n    ","Keyframes cannot be \"between\" frames, and so some curve values will need to be rounded to the nearest frame, which in turn will change the way the parameter track behaves.","\n    ","If the animation curve uses ","catmull-rom interpolation",", this will be lost and the interpolation between keyframes will be set to ","linear interpolation",".","\n  ","\n  ","You can also convert keyframes into an embedded animation curve from the right mouse button "," menu using the option ","Convert To Embedded Anim Curve",":","\n  ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sequences","\n        ","Next: ","Broadcast Messages","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Using Animation Curves"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"128"})