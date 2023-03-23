#tarefa1

print 'Digite seu nome: '

nome = gets.chomp

tamanho = nome.length

puts "#{nome} #{tamanho} caracteres"

# tarefa 2

print 'Digite seu nome: '

nome = gets.chomp

contrario = nome.reverse

puts "#{contrario} "

# tarefa 3

print 'Digite seu nome: '

nome = gets.chomp

tamanho = nome.length

metade = nome.slice(0, tamanho / 2 )

puts "#{metade} "

# tarefa 4

print "Digite sua data de nascimento (no formato DD/MM/AAAA): "
data = gets.chomp
    
dia, mes, ano = data.split("/").map(&:to_i)
    
soma = dia.digits.sum + mes.digits.sum + ano.digits.sum
    
puts "A soma dos dígitos da sua data de nascimento é #{soma}."


# tarefa 5

puts ' Digite o DDD que deseja saber a cidade: '

DDD = gets.chomp.to_i

case DDD
when 61
    puts 'Brasília'
when 71
    puts 'Salvador'
when 11
    puts 'São Paulo'
when 21
    puts 'Juiz de Fora'
when 19
    puts 'Campinas'
else
    puts 'DDD nao cadastrado'
end

# tarefa 6

print "Digite um número para iniciar a contagem regressiva: "
num = gets.chomp.to_i

if num >= 0
while num >= 0
  puts num
  num -= 1
  sleep(1) 
end
print 'KABUM'
else
    print 'Digite um numero positivo'
end



