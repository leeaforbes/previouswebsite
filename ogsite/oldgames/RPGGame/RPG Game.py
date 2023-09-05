import time  # This allows for time delays in the program :)
import sys  # This allows for immediate termination of the program >:D
import random

# basic setup variables
yesOrNo = ""
yesOrNoWhile = True  # Changed from integer to boolean.
nameWhile = True
playerName = "Player1"
playerNameAnswer = ""
swordPower = 2
playerHealth = 20
spiderHealth = 6
spiderPower = 3
chooseClass = ""
chooseClassWhile = True
minionHealth = 10
minionPower = 3
battle = True
battleChoice = True
chooseMove = ""
chooseMoveWhile = False

# Mage variables
mage = False
hiltSmashMage = swordPower * 2
hiltSmashMageUses = 1
fieryWindUsed = False
fieryWind = 0
fieryWindUses = 3

# Knight variables
knight = False
hiltSmashKnight = swordPower * 3
hiltSmashKnightUses = 1
ancientSkill = 6
ancientSkillUses = 2

# Medic variables
medic = False
hiltSmashMedic = swordPower * 2
hiltSmashMedicUses = 1
fullHeal = 3

print "<Helpful Soul> An old man walks towards you in a crowded street."
time.sleep(2)
print "Mr. Davidson: Hello young fellow. My name is Mr. Davidson."
time.sleep(2)
print "Mr. Davidson: I need help to find the lost treasure of Leeland."
time.sleep(2)
print "Mr. Davidson: Will you help me?"
time.sleep(2)

while yesOrNoWhile:
    yesOrNo = raw_input("<Helpful Soul> Type yes or no: ").lower()
    if yesOrNo == "yes":
        print "Mr. Davidson: Thank you for your help!"
        yesOrNoWhile = False
    elif yesOrNo == "no":
        print "Mr. Davidson: Wow that's messed up. Goodbye."
        time.sleep(2)
        print "-=DEVELOPER=- Game Over."
        yesOrNoWhile = False
        sys.exit()
    else:
        print "Mr. Davidson: I'm sorry that is not a valid response."

playerNameAnswer += raw_input("Mr. Davidson: You must now tell me your name: ")
while nameWhile:
    if playerNameAnswer == "Easter Egg":
        print "-=DEVELOPER=- You found the Easter Egg!"
        swordPower += 2
        time.sleep(2)
        print "-=DEVELOPER=- Your sword power was raised by 2 and is now " + str(swordPower) + "!"
        time.sleep(2)
        print "-=DEVELOPER=- Your sword can help you lots along the way."
        time.sleep(2)
        playerNameAnswer = raw_input("Mr. Davidson: You must now tell me your REAL name: ")
        playerName = playerNameAnswer
        nameWhile = False

    else:
        playerName = playerNameAnswer
        nameWhile = False
print "Mr. Davidson: Hello " + playerName + "!"
time.sleep(2)
print "Mr. Davidson: Thanks again for your help!"
time.sleep(2)
print "Mr. Davidson: Here is your first mission -->"
print ""
time.sleep(2)
print "Mr. Davidson: Please make your way to the Cave of\nWonders and find Professor Almanac. He will be waiting."
time.sleep(3)
print "Mr. Davidson: Oh yes! I almost forgot! Here is a weapon. You will need it."
print ""
time.sleep(2)
print "<Helpful Soul> You have made it to the cave. There are two"
leftOrRightAnswer = True
while leftOrRightAnswer:
    leftOrRight = raw_input("passage ways you can take. Type 1 for left or 2 for right: ")
    if leftOrRight == "1":
        print "<Helpful Soul> You went left. A giant spider stands in your way!"
        time.sleep(2)
        while battle:
            battleChoice = raw_input("<Helpful Soul> Type 1 to battle or 2 to run: ")
            if battleChoice == "1":
                print "<Helpful Soul> You and the spider engage in battle."
                time.sleep(2)
                print "<Helpful Soul> You have " + str(playerHealth) + " health and the spider has " + str(spiderHealth) + " health."
                time.sleep(2)
                while spiderHealth > 0:
                    if spiderHealth > 0:
                        spiderHealth -= swordPower
                        playerHealth -= spiderPower
                        print "<Helpful Soul> You and the spider battle."
                        time.sleep(2)
                        if spiderHealth <= 0:
                            print "<Helpful Soul> You have " + str(playerHealth) + " health and the spider has 0 health."
                        else:
                            print "<Helpful Soul> You have " + str(playerHealth) + " health and the spider has " + str(spiderHealth) + " health."
                        time.sleep(2)

                    # elif spiderHealth <= 0:
                    #     print "<Helpful Soul> You have " + str(playerHealth) + " health and the spider has 0 health."
                    #     time.sleep(2)
                battle = False
                spiderHealth = -1
                print "<Helpful Soul> You have " + str(playerHealth) + " health left."
                time.sleep(2)
                print "<Helpful Soul> You killed the spider! Go back before more spiders attack."
                time.sleep(2)
                print "<Helpful Soul> You went back and then went right."
                time.sleep(2)
            elif battleChoice == "2":
                print "<Helpful Soul> You turned back safely and went right."
                battle = False
        leftOrRightAnswer = False
    elif leftOrRight == "2":
        print "<Helpful Soul> You went right."
        time.sleep(2)
        leftOrRightAnswer = False
    else:
        print "<Helpful Soul> You bumped into a wall and died."
        time.sleep(2)
        print "-=DEVELOPER=- Game Over."
        sys.exit()
print "<Helpful Soul> You now see a staircase going up and a staircase going down."
upOrDown = raw_input("<Helpful Soul> Type 1 for up or 2 for down.")
upOrDownChoice = True
while upOrDownChoice:
    if upOrDown == "1":
        upOrDownChoice = False
    elif upOrDown == "2":
        trapDamage = random.randrange(0, 5) + 1
        playerHealth -= trapDamage
        print "<Helpful Soul> It was a trap set up by ancient natives of this land! -" + str(trapDamage) + " Health."
        time.sleep(2)
        print "<Helpful Soul> You now have " + str(playerHealth) + " health."
        time.sleep(2)
        print "<Helpful Soul> You climb out and go up the other staircase."
        upOrDownChoice = False
    else:
        print "<Helpful Soul> You died in a trap."
        time.sleep(2)
        print "-=DEVELOPER=- Game Over."
        sys.exit()


print "<Helpful Soul> Professor Almanac stands at the top of the stairway."
print "Professor Almanac: Hello " + playerName + ". I'm sure you are tired from your journey. Here take this."
drinkOrNot = raw_input("<Helpful Soul> He hands you a bottle full of a yellow liquid. Type 1 to drink or 2 to put it in your pocket.")
drinkOrNotChoice = True
while drinkOrNotChoice:
    if drinkOrNot == "1":
        playerHealth = 20
        print "Professor Almanac: That potion healed you and you have 20 health again."
        time.sleep(2)
        print "Health: " + str(playerHealth)
        drinkOrNotChoice = False
    elif drinkOrNot == "2":
        print "Professor Almanac: You need to drink that to be healthy agian."
        time.sleep(2)
        print "<Helpful Soul> You drank the potion and felt revived as it healed you."
        time.sleep(2)
        playerHealth = 20
        print "Health: " + str(playerHealth)
        drinkOrNotChoice = False
    else:
        print "<Helpful Soul> The potion turned to poison and kills you."
        time.sleep(2)
        sys.exit()

print "Professor Almanac: It is now time for you to chose your destiny..."
time.sleep(2)
print "Professor Almanac: There are three main paths you may take."
time.sleep(2)
print "Professor Almanac: You may become a Mage who's fiery effects damage opponents over time."
time.sleep(2)
print "Professor Almanac: Or you can choose Knight who has experience in battle and dishes out high damage."
time.sleep(2)
print "Professor Almanac: You also have another choice of Medic who can regenerate health in battle."
time.sleep(2)
print "Professor Almanac: The choice is yours. Each path has great benefits but also a weakness."
while chooseClassWhile:
    chooseClass = raw_input("<Helpful Soul> Type Mage, Knight, or Medic.")
    chooseClass = chooseClass.lower()
    if chooseClass == "mage":
        print "Professor Almanac: You are now a Mage!"
        time.sleep(2)
        print "Professor Almanac: Mages deal damage over time with certain moves."
        time.sleep(2)
        print "Professor Almanac: Mages have average health (20)."
        time.sleep(2)
        playerHealth = 20
        mage = True
        chooseClassWhile = False
    elif chooseClass == "knight":
        print"Professor Almanac: You are now a Knight!"
        time.sleep(2)
        print "Professor Almanac: A Knight's moves do more damage than other people."
        time.sleep(2)
        print "Professor Almanac: I have raised your sword power by 3."
        time.sleep(2)
        swordPower += 3
        hiltSmashKnight = swordPower * 3
        print "Professor Almanac: Unfortunately Knights have low health (15)"
        time.sleep(2)
        playerHealth = 15
        knight = True
        chooseClassWhile = False
    elif chooseClass == "medic":
        print "Professor Almanac: You are now a Medic!"
        time.sleep(2)
        print "Professor Almanac: A medic has the ability to heal themselves with certain moves."
        time.sleep(2)
        print "Professor Almanac: Medics have high health (25)."
        time.sleep(2)
        playerHealth = 25
        medic = True
        chooseClassWhile = False
    else:
        print "<Helpful Soul> Type either Mage, Knight, or Medic."
        time.sleep(2)
print "<Helpful Soul> A strange man in a dark coat and a mask over his face approaches along with some other creatures."
time.sleep(2)
print "Professor Almanac: Be gone Dr. Birch! We will not let you get the lost treasure of Leeland!"
time.sleep(2)
print "Dr. Birch: Then I challenge you to a battle Almanac! Your pupil can battle one of my minions!"
time.sleep(2)
print "Professor Almanac: Okay " + playerName + ", I need to teach you some things."
time.sleep(2)
print "Professor Almanac: You and the other person will take turns using moves you have learned."
time.sleep(2)
print "You are healed after each battle no matter what, whether you win or lose."
time.sleep(2)
print "------------------------------------------------------------------------------------------------------------"

if mage:
    print "Professor Almanac: You can use the move Sword Hit as many times as you like per battle."
    time.sleep(2)
    print "Professor Almanac: Sword Hit damages the enemy by the power of your sword (" + str(swordPower) + ")."
    time.sleep(2)
    print "Professor Almanac: Hilt Smash can be used " + str(hiltSmashMageUses) + " times per battle."
    time.sleep(2)
    print "Professor Almanac: Hilt Smash doubles the damage of your sword and strikes your enemy, dealing (" + str(hiltSmashMage) + ") damage."
    time.sleep(2)
    print "Professor Almanac: Fiery Wind can be used " + str(fieryWindUses) + " times per battle."
    time.sleep(2)
    print "Professor Almanac: Fiery Wind does " + str(fieryWind) + " damage per turn after first use in that battle. The damage does stack if used multiple times per battle."

elif knight:
    print "Professor Almanac: You can use the move Sword Hit as many times as you like per battle."
    time.sleep(2)
    print "Professor Almanac: Sword Hit damages the enemy by the power of your sword (" + str(swordPower) + ")."
    time.sleep(2)
    print "Professor Almanac: Hilt Smash can be used " + str(hiltSmashKnightUses) + " times per battle."
    time.sleep(2)
    print "Professor Almanac: Hilt Smash triples the damage of your sword and strikes your enemy, dealing (" + str(hiltSmashKnight) + ") damage."
    time.sleep(2)
    print "Professor Almanac: Ancient Skill can be used " + str(ancientSkillUses) + " times per battle."
    time.sleep(2)
    print "Professor Almanac: Ancient Skill does " + str(ancientSkill) + " damage to the enemy."

elif medic:
    print "Professor Almanac: You can use the move Sword Hit as many times as you like per battle."
    time.sleep(2)
    print "Professor Almanac: Sword Hit damages the enemy by the power of your sword (" + str(swordPower) + ")."
    time.sleep(2)
    print "Professor Almanac: Hilt Smash can be used " + str(hiltSmashMedicUses) + " times per battle."
    time.sleep(2)
    print "Professor Almanac: Hilt Smash doubles the damage of your sword and strikes your enemy, dealing (" + str(hiltSmashMedic) + ") damage."
    time.sleep(2)
    print "Professor Almanac: Full Heal can be used " + str(fullHeal) + " times per battle."
    time.sleep(2)
    print "Professor Almanac: Full Heal heals you to your maximum health (25)."

print "------------------------------------------------------------------------------------------------------------"
time.sleep(2)
print "Professor Almanac: Good luck to you " + playerName + "."
time.sleep(2)
print "<Helpful Soul> You and Dr. Birch's minion engage in battle."
time.sleep(2)
print "You have " + str(playerHealth) + " health."
time.sleep(2)
print "The minion has " + str(minionHealth) + " health."
time.sleep(2)

battle = True

while minionHealth > 0:
    if playerHealth < 0:
        print "<Helpful Soul> The minion killed you. Game over."
        sys.exit(0)

    else:
        while battle:
            if mage:
                chooseMoveWhile = True
                while chooseMoveWhile:
                    if minionHealth < 1:
                        battle = False
                        break
                    else:
                        chooseMove = raw_input("<Helpful Soul> Chose a move: Type \"Sword Hit\"[*], \"Hilt Smash\"[" + str(hiltSmashMageUses) + "], \"Fiery Wind\"[" + str(fieryWindUses) + "] or \"Help\".")
                        chooseMove = chooseMove.lower()
                        if chooseMove == "sword hit":
                            minionHealth -= swordPower
                            playerHealth -= minionPower
                            print "You used Sword Hit!"
                            time.sleep(2)
                            print "You have " + str(playerHealth) + " health."
                            time.sleep(2)
                            print "The minion has " + str(minionHealth) + " health."
                            time.sleep(2)
                            chooseMoveWhile = False
                        elif chooseMove == "hilt smash":
                            if hiltSmashMageUses > 0:
                                minionHealth -= hiltSmashMage
                                playerHealth -= minionPower
                                print "You used Hilt Smash!"
                                time.sleep(2)
                                print "You have " + str(playerHealth) + " health."
                                time.sleep(2)
                                print "The minion has " + str(minionHealth) + " health."
                                time.sleep(2)
                                hiltSmashMageUses -= 1
                                print "Hilt Smash has " + str(hiltSmashMageUses) + " uses left"
                                time.sleep(2)
                            else:
                                print "<Helpful Soul> This move is out of uses. You ended your turn."
                                time.sleep(2)
                            chooseMoveWhile = False
                        elif chooseMove == "fiery wind":
                            if fieryWindUses > 0:
                                print "You used Fiery Wind!"
                                time.sleep(2)
                                print "You have " + str(playerHealth) + " health."
                                time.sleep(2)
                                print "The minion has " + str(minionHealth) + " health."
                                time.sleep(2)
                                fieryWindUsed = True
                                fieryWind += 1
                                fieryWindUses -= 1
                                print "Fiery Wind has " + str(fieryWindUses) + " uses left"
                                time.sleep(2)
                            else:
                                print "<Helpful Soul> This move is out of uses. You ended your turn."
                                time.sleep(2)
                            chooseMoveWhile = False
                        elif chooseMove == "help":
                            print "Professor Almanac: You can use the move Sword Hit as many times as you like per battle."
                            time.sleep(2)
                            print "Professor Almanac: Sword Hit damages the enemy by the power of your sword (" + str(swordPower) + ")."
                            time.sleep(2)
                            print "Professor Almanac: Hilt Smash can be used " + str(hiltSmashMageUses) + " more times this battle."
                            time.sleep(2)
                            print "Professor Almanac: Hilt Smash doubles the damage of your sword and strikes your enemy, dealing (" + str(hiltSmashMage) + ") damage."
                            time.sleep(2)
                            print "Professor Almanac: Fiery Wind can be used " + str(fieryWindUses) + " more times this battle."
                            time.sleep(2)
                            print "Professor Almanac: Fiery Wind does " + str(fieryWind) + " damage per turn after first use in that battle. The damage does stack if used multiple times per battle."
                            time.sleep(2)
                        else:
                            print "<Helpful Soul> Im sorry that is not a known move. Please type a move that is valid."
                            time.sleep(2)
                if fieryWindUsed:
                    minionHealth -= fieryWind
            elif knight:
                chooseMoveWhile = True
                while chooseMoveWhile:
                    if minionHealth < 1:
                        battle = False
                        break
                    else:
                        chooseMove = raw_input("<Helpful Soul> Chose a move: Type \"Sword Hit\"[*], \"Hilt Smash\"[" + str(hiltSmashKnightUses) + "], \"Ancient Skill\"[" + str(ancientSkillUses) + "] or \"Help\".")
                        time.sleep(2)
                        chooseMove = chooseMove.lower()
                        if chooseMove == "sword hit":
                            minionHealth -= swordPower
                            playerHealth -= minionPower
                            print "You used Sword Hit!"
                            time.sleep(2)
                            print "You have " + str(playerHealth) + " health."
                            time.sleep(2)
                            print "The minion has " + str(minionHealth) + " health."
                            time.sleep(2)
                            chooseMoveWhile = False
                        elif chooseMove == "hilt smash":
                            if hiltSmashKnightUses > 0:
                                minionHealth -= hiltSmashKnight
                                playerHealth -= minionPower
                                print "You used Hilt Smash!"
                                time.sleep(2)
                                print "You have " + str(playerHealth) + " health."
                                time.sleep(2)
                                print "The minion has " + str(minionHealth) + " health."
                                time.sleep(2)
                                hiltSmashMageUses -= 1
                                print "Hilt Smash has " + str(hiltSmashKnightUses) + " uses left"
                                time.sleep(2)
                            else:
                                print "<Helpful Soul> This move is out of uses. You ended your turn."
                                time.sleep(2)
                            chooseMoveWhile = False
                        elif chooseMove == "ancient skill":
                            if ancientSkillUses > 0:
                                print "You used Ancient Skill!"
                                time.sleep(2)
                                print "You have " + str(playerHealth) + " health."
                                time.sleep(2)
                                print "The minion has " + str(minionHealth) + " health."
                                time.sleep(2)
                                ancientSkillUses -= 1
                                print "Ancient Skill has " + str(ancientSkillUses) + " uses left"
                                time.sleep(2)
                                minionHealth -= ancientSkill
                                playerHealth -= minionPower
                            else:
                                print "<Helpful Soul> This move is out of uses. You ended your turn."
                                time.sleep(2)
                            chooseMoveWhile = False

                        elif chooseMove == "help":
                            print "Professor Almanac: You can use the move Sword Hit as many times as you like per battle."
                            time.sleep(2)
                            print "Professor Almanac: Sword Hit damages the enemy by the power of your sword (" + str(swordPower) + ")."
                            time.sleep(2)
                            print "Professor Almanac: Hilt Smash can be used " + str(hiltSmashKnightUses) + " more times this battle."
                            time.sleep(2)
                            print "Professor Almanac: Hilt Smash triples the damage of your sword and strikes your enemy, dealing (" + str(hiltSmashKnight) + ") damage."
                            time.sleep(2)
                            print "Professor Almanac: Ancient Skill can be used " + str(ancientSkillUses) + " more times this battle."
                            time.sleep(2)
                            print "Professor Almanac: Ancient Skill does " + str(ancientSkill) + " damage to the enemy."
                            time.sleep(2)
                        else:
                            print "<Helpful Soul> Im sorry that is not a known move. Please type a move that is valid."
                            time.sleep(2)
                if fieryWindUsed:
                    minionHealth -= fieryWind
            elif medic:
                chooseMoveWhile = True
                while chooseMoveWhile:
                    if minionHealth < 1:
                        battle = False
                        break
                    else:
                        chooseMove = raw_input("<Helpful Soul> Chose a move: Type \"Sword Hit\"[*], \"Hilt Smash\"[" + str(hiltSmashMedicUses) + "], \"Full Heal\"[" + str(fullHeal) + "] or \"Help\".")
                        time.sleep(2)
                        chooseMove = chooseMove.lower()
                        if chooseMove == "sword hit":
                            minionHealth -= swordPower
                            playerHealth -= minionPower
                            print "You used Sword Hit!"
                            time.sleep(2)
                            print "You have " + str(playerHealth) + " health."
                            time.sleep(2)
                            print "The minion has " + str(minionHealth) + " health."
                            time.sleep(2)
                            chooseMoveWhile = False
                        elif chooseMove == "hilt smash":
                            if hiltSmashKnightUses > 0:
                                minionHealth -= hiltSmashMedic
                                playerHealth -= minionPower
                                print "You used Hilt Smash!"
                                time.sleep(2)
                                print "You have " + str(playerHealth) + " health."
                                time.sleep(2)
                                print "The minion has " + str(minionHealth) + " health."
                                time.sleep(2)
                                hiltSmashMedicUses -= 1
                                print "Hilt Smash has " + str(hiltSmashMedicUses) + " uses left"
                                time.sleep(2)
                            else:
                                print "<Helpful Soul> This move is out of uses. You ended your turn."
                                time.sleep(2)
                            chooseMoveWhile = False
                        elif chooseMove == "full heal":
                            if fullHeal > 0:
                                print "You used Full Heal!"
                                time.sleep(2)
                                print "You have " + str(playerHealth) + " health."
                                time.sleep(2)
                                print "The minion has " + str(minionHealth) + " health."
                                time.sleep(2)
                                fullHeal -= 1
                                print "Full Heal has " + str(fullHeal) + " uses left"
                                time.sleep(2)
                                playerHealth = 25
                                print "You have been healed."
                                time.sleep(2)
                                playerHealth -= minionPower
                            else:
                                print "<Helpful Soul> This move is out of uses. You ended your turn."
                                time.sleep(2)
                            chooseMoveWhile = False

                        elif chooseMove == "help":
                            print "Professor Almanac: You can use the move Sword Hit as many times as you like per battle."
                            time.sleep(2)
                            print "Professor Almanac: Sword Hit damages the enemy by the power of your sword (" + str(swordPower) + ")."
                            time.sleep(2)
                            print "Professor Almanac: Hilt Smash can be used " + str(hiltSmashMedicUses) + " times per battle."
                            time.sleep(2)
                            print "Professor Almanac: Hilt Smash doubles the damage of your sword and strikes your enemy, dealing (" + str(hiltSmashMedic) + ") damage."
                            time.sleep(2)
                            print "Professor Almanac: Full Heal can be used " + str(fullHeal) + " times per battle."
                            time.sleep(2)
                            print "Professor Almanac: Full Heal heals you to your maximum health (25)."
                            time.sleep(2)
                        else:
                            print "<Helpful Soul> Im sorry that is not a known move. Please type a move that is valid."
                            time.sleep(2)
                if fieryWindUsed:
                    minionHealth = minionHealth - fieryWind
                    print "Fiery Wind continues to burn the enemy!"
                    time.sleep(2)
chooseMoveWhile = True
battle = True

hiltSmashMage = swordPower * 2
hiltSmashMageUses = 1
fieryWindUsed = False
fieryWind = 0
fieryWindUses = 3

hiltSmashKnight = swordPower * 3
hiltSmashKnightUses = 1
ancientSkill = 6
ancientSkillUses = 2

hiltSmashMedic = swordPower * 2
hiltSmashMedicUses = 1
fullHeal = 3

if mage:
    playerHealth = 20

elif knight:
    playerHealth = 15

elif medic:
    playerHealth = 25

minionHealth = 0
print "You defeated the minion and your health and moves have been restored."
time.sleep(2)
print "To be continued..."
