counter=1

for file in *.png; do
  mv "$file" "portrait_$counter.png"
  ((counter++))
done