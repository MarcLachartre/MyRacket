require 'minitest/reporters'
module Minitest
  module Reporters
    class TapReporter < DefaultReporter
      def report
        super
        success = true 
        puts " "
        tests.each_with_index do |test, index|
          test_str = "#{test_class(test)} - #{test.name.tr("#", "_")}"
          if test.passed?
            puts Rainbow("ok #{index + 1} - #{test_str}").green

          elsif test.skipped?
            puts Rainbow("ok #{index + 1} - #{test_str}").green

          elsif test.failure.present?
            puts " "
            puts Rainbow("not ok #{index + 1} - failed: #{test_str}").red.bright
            success = false
            message_for(test).each_line do |line|
              print_padded_comment(line)
            end

            unless test.failure.is_a?(MiniTest::UnexpectedError)
              trace = filter_backtrace(test.failure.backtrace)
              trace.each do |line|
                print_padded_comment(line)
              end
            end
            puts " "
            
          end
         
        end
        print_success_message(success)
      end

      private

      def print_padded_comment(line)
        puts Rainbow("##{pad(line)}").red
      end

      def print_success_message(success)    
        if success == true  
          puts Rainbow("      _ _").darkslategray + Rainbow("       _ _ _ _ _ _ _ _ _ _ _").bisque
          puts Rainbow("     / X \\ ").darkslategray + Rainbow("    /                     \\").bisque 
          puts Rainbow("   _.-----._").yellow    + Rainbow("  (   Duff, aaarggghh...  )").bisque
          puts Rainbow("  /         \\").yellow  + Rainbow("  \\_ _ _ _ _ _ _ _ _ _ _/").bisque
          puts Rainbow(" |           |").yellow  + Rainbow("       O").bisque
          puts Rainbow(" | ").yellow + Rainbow("     __  __") + Rainbow(")").yellow + Rainbow("  . o ").bisque
          puts Rainbow(" | ").yellow + Rainbow("    /  \\/  \\")
          puts Rainbow(" /\\/\\").darkslategray + " (" + Rainbow("o").darkgray + "   )" + Rainbow("o").darkgray + "  )"
          puts Rainbow(" /c").yellow + "    \\__/" + Rainbow(" --.").yellow
          puts Rainbow(" \\_").yellow + Rainbow("   _-----_").sandybrown + Rainbow("-'").yellow + Rainbow("      ______________________________________").limegreen.bright
          puts Rainbow(" |").yellow + Rainbow("  /         \\     ").sandybrown + Rainbow("/                                      \\").limegreen.bright
          puts Rainbow(" |").yellow + Rainbow(" | '\\________)").sandybrown + Rainbow("   <  Woohoo! All tests passed! Duff time!  )").limegreen.bright 
          puts Rainbow(" |").yellow + Rainbow("  \\_____)").sandybrown + Rainbow("         \\______________________________________/").limegreen.bright
          puts Rainbow(" |").yellow + " _____" + Rainbow(" |").yellow
          puts "|______/\\/\\"
          puts "/         \\"
          puts " "
        end
      end
    end
  end
end

Minitest::Reporters.use!(
  Minitest::Reporters::TapReporter.new(),
  ENV,
  Minitest.backtrace_filter,
)