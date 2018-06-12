require('minitest/autorun')
require('minitest/rg')
require_relative('../card.rb')
require_relative('../cardgame.rb')

class TestCardGame < Minitest::Test

  def setup
    @card1= Card.new("hearts", 10)
    @card2 = Card.new("jack", 1)
    @cardgame = CardGame.new(@card1, @card2)
    @cards = [@card1, @card2]
  end

  def test_suit
    assert_equal("hearts", @card1.suit())
  end

  def test_value
    assert_equal(1, @card2.value())
  end

  def test_check_for_Ace__true
    result = @cardgame.check_for_Ace(@card2)
    assert_equal(true, result)
  end

  def test_check_for_Ace__false
   result = @cardgame.check_for_Ace(@card1)
    assert_equal(false, result)
  end

  def test_highest_card
    result = @cardgame.highest_card(@card1, @card2)
    assert_equal("hearts", result)
  end

  def test_cards_total
    result = @cardgame.cards_total(@cards)
    assert_equal("You have a total of 11", result)
  end
end
