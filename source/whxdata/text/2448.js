rh._.exports({"0":["buffer_seek"],"1":["buffer_seek,buffer_seek_start,buffer_seek_relative,buffer_seek_end"],"2":["buffer_seek,buffer_seek_start,buffer_seek_relative,buffer_seek_end"],"3":["\n  ","\n  ","\n  ","This function can be used to move through a buffer, finding the start, the end, or a position relative to that which was last used when reading or writing data. The \"offset\" value is the offset (in bytes) to add to the given seek position,\n    for example, if the base is relative and the offset is 4, then the buffer position will move along 4 bytes from its current position. Please note the following:","\n  ","\n    ","You can use negative values for the offset to seek back through the buffer as well as positive values.","\n    ","If the buffer is of the \"wrap\" type and you offset past the end of the buffer, the seek position will also wrap.","\n    ","If the buffer is not of the \"wrap\" type, the seek will clamp to the beginning or end of the buffer, even when the offset would take the seek outside of the buffer limits.","\n  ","\n  ","The following constants are accepted as the \"base\" argument for seeking to:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","buffer_seek_start","\n        ","The start of the buffer","\n      ","\n      ","\n        ","buffer_seek_relative","\n        ","A position relative to the current read/write position","\n      ","\n      ","\n        ","buffer_seek_end","\n        ","The end of the buffer","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","\n  ","\n  ","buffer_seek(buffer, base, offset);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","buffer","\n        ","The index of the buffer to use.","\n      ","\n      ","\n        ","base","\n        ","The base position to seek.","\n      ","\n      ","\n        ","offset","\n        ","The data offset value.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","buffer_seek(buff, buffer_seek_start, 0);"," buffer_write(buff, buffer_s16, 0);"," buffer_write(buff, buffer_s16, x);"," buffer_write(buff, buffer_s16, y);","\n  ","The above code finds the start of the buffer with the id stored in the variable \"buff\" them writes a series of signed 16bit integer values to it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Buffers","\n        ","Next: ","buffer_tell","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["buffer_seek"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2448"})