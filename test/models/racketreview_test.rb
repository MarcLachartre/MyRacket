require 'test_helper'

class RacketreviewTest < ActiveSupport::TestCase

  setup do
    @test_review = racketreviews(:reviewOne)
  end

  test "racketreview should belong to a user" do
    @test_review[:user_id] = nil
    assert_not @test_review.save, "racketreview without user can be saved"
  end

  test "racketreview should belong to a racket" do
    @test_review[:racket_id] = nil
    assert_not @test_review.valid?, "racketreview without racket can be saved"
  end

  test "should not save racketreview without comment" do
    @test_review[:comment] = ""
    assert_not @test_review.valid?, "racketreview without comment can be saved"
  end

  test "should not save racketreview with comment length > 700" do
    @test_review[:comment] = "Federer"*101
    assert_not @test_review.valid?, "racketreview with comment length > 700 can be saved"
  end
end
