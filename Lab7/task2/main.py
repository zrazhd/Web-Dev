from models import *

character = Character("Org", 12, "")
ashab = Ashab("Oleg", 24, "BMW")
macan = Macan("Oleg", 20, "Denis")

characters = [character, ashab, macan]

for c in characters:
    print(c)
    print(c.name, "говорит:", c.talk())
    print()

print(ashab.ride())
print(macan.makeRap("рэп"))