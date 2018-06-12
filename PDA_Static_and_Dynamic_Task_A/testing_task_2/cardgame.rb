require_relative('card.rb')
class CardGame

  attr_reader :card1, :card2

  def initialize(card1, card2)
    @card1 = card1
    @card2 = card2
  end

  def check_for_Ace(card)
    if card.value == 1
      return true
    else
      return false
    end
  end

  def highest_card(card1, card2)
    if card1.value > card2.value
      return card1.suit
    else
      return card2.suit
    end
  end

  def cards_total(cards)
    total = 0
    for card in cards
      total += card.value
    end
      return "You have a total of #{total}"
    end
end
