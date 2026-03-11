class Character:
    def __init__(self, name, age, weapon):
        self.name = name
        self.age = age
        self.weapon = weapon

    def talk(self):
        return "Я челоаек и я говорю"

    def walk(self):
        return "Я челоаек и я хожу"

    def __str__(self):
        return f"Я человек, мое имя {self.name}"


class Ashab(Character):
    def __init__(self, name, age, car):
        super().__init__(name, age, car)
        self.car = car
        self.name = "Ashab"

    def talk(self):
        return "Уосьмой май"

    def walk(self):
        return f"Я {self.name} и я не хожу, у меня еcть МОЯ машина"

    def ride(self):
        return "я еду на МОЕЙ машине"

    def __str__(self):
        return f"Я Асхаб Тамаев и это МОЯ машина: {self.car}"

    

class Macan(Character):
    def __init__(self, name, age, brat):
        super().__init__(name, age, brat)
        self.brat = brat
        self.name = "Macan"

    def walk(self):
        return "Я Макан брат, и я хожу брат"

    def talk(self):
        return "Я Макан брат и я говорю брат"

    def makeRap(self, rapName):
        return f"Я пишу рэп брат про {rapName}, брат"

    def __str__(self):
        return f"Я Макан брат, моего брата зовут {self.brat} брат"


