import os

#for file in os.listdir():
#    os.rename(file, str(int(file.split('.')[0].split()[0])) + '.' + file.split('.')[-1])

for file in os.listdir():
    if file != 'tswiftrenamer.py':
        os.rename(file, '.'.join(file.split('.')[:-1]))
