# Rock Paper Scissors
import random

print("Rock Paper Scissors")
print("Enter your choice: ")
print("[r] Rock")
print('[p] Paper')
print("[s] Scissors")

player_score = 0
computer_score = 0

while player_score != 5 or computer_score != 5:
	player_choice = input("rockPaperScissors> ")
	computer_choice = random.choice(['r', 'p', 's'])

	if player_choice == "r" and computer_choice == "s":
		print("Player wins!")
		player_score += 1
		print("\n-------------------")
		print("Player Score: " + str(player_score))
		print("Computer Score: " + str(computer_score))
		print('-------------------')

	elif player_choice == "p" and computer_choice == "s":
		print("Computer Wins wins!")
		computer_score += 1
		print("\n-------------------")
		print("Player Score: " + str(player_score))
		print("Computer Score: " + str(computer_score))
		print('-------------------')

	elif player_choice == "s" and computer_choice == "r":
		print("Computer Wins wins!")
		computer_score += 1
		print("\n-------------------")
		print("Player Score: " + str(player_score))
		print("Computer Score: " + str(computer_score))
		print('-------------------')

	elif player_choice == computer_choice:
		print('Tie!')
		print("\n-------------------")
		print("Player Score: " + str(player_score))
		print("Computer Score: " + str(computer_score))
		print('-------------------')

