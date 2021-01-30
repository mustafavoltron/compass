degrees = 0

def on_forever():
    global degrees
    degrees = input.compass_heading()
    if degrees < 45:
        basic.show_string("N")
    elif degrees == 45:
        basic.show_string("NE")
    elif degrees < 120:
        basic.show_string("Q")
    elif degrees < 135:
        basic.show_string("E")
    elif degrees == 135:
        basic.show_string("SE")
    elif degrees < 225:
        basic.show_string("S")
    elif degrees == 225:
        basic.show_string("SW")
    elif degrees < 315:
        basic.show_string("W")
    elif degrees == 315:
        basic.show_string("NW")
    else:
        basic.show_string("N")
basic.forever(on_forever)
