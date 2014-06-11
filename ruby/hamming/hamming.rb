module Hamming
  
  def self.compute(a, b)
    differences = 0
    [a.length, b.length].min.times.count do |index|
      differences += 1 if a[index] != b[index]
    end
  end
  
end