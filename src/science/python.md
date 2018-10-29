# Python


## sitepackage

```
    import site; site.getsitepackages()
    ['/usr/local/lib/python2.7/dist-packages', '/usr/lib/python2.7/dist-packages']
    import sys
    sys.path.insert(0, 'libs')
    site.addsitedir('lib') 

```

## Python代码分析工具:

Flake8, PyChecker、Pylint, PyFlakes, NedBatchelder’s McCabe script,Pep8

```pip install autopep8
$ autopep8 --in-place --aggressive --aggressive foo.py
```

## pip

```
sudo easy_install -U pip
pip3.6 freeze --local | grep -v '^\-e' | cut -d = -f 1  | xargs -n1 sudo pip3.6 install -U
pip3 uninstall -y scipy scikit-learn
pip3 install --no-binary scipy scikit-learn
pip3 uninstall numpy
sudo pip3 uninstall numpy
pip3 show numpy
pip install numpy==1.14.5

python -m /home/mike/pip2_lib/bin/pip2 -version
export PIP_CONFIG_FILE=$HOME/.pip2/pip2.conf

pip2.conf
[global]
index-url = http://pypi.douban.com/simple
download_cache = ~/Downloads/gz
target = /home/mike/pip2_lib
[install]
trusted-host=pypi.douban.com

/home/mike/pip2_lib/bin/pip2 --version
 export PYTHONPATH=$PYTHONPATH:/home/mike/pip2_lib
 
 pyasn1 hyperframe, hpack, enum34, h2, hyper

/home/mike/pip2_lib/bin/pip2 install pyasn1
/home/mike/pip2_lib/bin/pip2 install hyper

which -a pip
/usr/local/bin/pip

pip freeze | grep -v "^-e" | xargs pip uninstall -y

python3 -m pip install -U --force-reinstall pip
python -m pip install -U --force-reinstall pip

```

## minify

```
from slimit import minify
with open('search_index.js', 'r') as myfile:
  data = myfile.read()  
print(minify(data, mangle=True, mangle_toplevel=True)) 
```

## load json

```
import json
from pprint import pprint
with open('/home/mike/Downloads/elasticlunr.js-master/example/example_index.json') as f:
    data = json.load(f)
pprint(data)
```


## theano 报错WARNING (theano.tensor.blas): Using NumPy C-API based implementation for BLA

解决方法：
```
sudo apt-get install libblas-dev liblapack-dev libatlas-base-dev gfortran
```

## pyqt qt.qpa.screen: QXcbConnection: Could not connect to display 

```
export DISPLAY=:0.0
export XAUTHORITY=/home/mike/.Xauthority
python3.6 sysclean.py -platform xcb
```


## python 环境变量设置PYTHONPATH

PYTHONPATH是Python搜索路径，默认我们import的模块都会从PYTHONPATH里面寻找。
打印PYTHONPATH：
```
import os
print sys.path
```
注意：sys.path 也可以用 os.sys.path 替换，两个应该是同一个命令，推荐使用sys.path, 因为 os.sys.path 在python document 中好像没有提及．
设置PYTHONPATH：

    方法一：命令窗口添加路径

     export PYTHONPATH=$PYTHONPATH:/home/ershisui

    注意：此方法只在当前命令窗口生效，即如果打开一个新的Terminal 窗口，定位到当前目录，　打印PYTHONPATH 是没有刚才加入的路径的．

    方法二：在python 中添加：

      import sys
      sys.path.append('/home/ershisui/')

    实例

    Tensorflow 的　object detection API 模块中安装教程中

      export PYTHONPATH=$PYTHONPATH:`pwd`:'pwd'/slim

    即添加了python 路径：（pwd 是输出当前目录的命令，这里为什么可以这样，还不懂）添加了两个路径，分别为 /home/.../models-master/research 和　 /home/.../models-master/research/slim（可以验证在research 文件夹下有slim 文件）

    Tensorflow 的　object detection API 模块中object_detection_tutorial.ipynb 中

     sys.path.append("..")

    即在python 中添加了新的搜索目录，即当前目录的上一层（在这里应该是　/home/.../models-master/research）


## Grouping Python dictionary keys as a list and create a new dictionary with this list as a value

```
d = {1: 6, 2: 1, 3: 1, 4: 9, 5: 9, 6: 1}
v = {6:[1], 1:[2, 3, 6], 9: [4, 5]}

v = {}

for key, value in sorted(d.items()):
    v.setdefault(value, []).append(key)

dict = {'Name': 'Zabra', 'Age': 7}
print "Value : %s" %  dict.get('Age')

L = ['a', 'b']
k = 4
L1 = ['{}{}'.format(x, y) for y in range(1, k+1) for x in L]
print(L1)

#Output
['a1', 'b1', 'a2', 'b2', 'a3', 'b3', 'a4', 'b4']

https://stackoverflow.com/questions/3749512/python-group-by

from itertools import groupby
result = {}
for key,valuesiter in groupby(input, key=sortkeyfn):
    result[key] = list(v[0] for v in valuesiter)


{'NOT': ['9085267', '11788544'], 
 'ETH': ['5238761', '5349618', '962142', '7795297', '7341464', '5594916', '1550003'], 
 'KAT': ['11013331', '9843236']}

input = [('11013331', 'KAT'), ('9085267', 'NOT'), ('5238761', 'ETH'), ('5349618', 'ETH'), ('11788544', 'NOT'), ('962142', 'ETH'), ('7795297', 'ETH'), ('7341464', 'ETH'), ('9843236', 'KAT'), ('5594916', 'ETH'), ('1550003', 'ETH')]
>>> from collections import defaultdict
>>> res = defaultdict(list)
>>> for v, k in input: res[k].append(v)

 [{'type':k, 'items':v} for k,v in res.items()]
[{'items': ['9085267', '11788544'], 'type': 'NOT'}, {'items': ['5238761', '5349618', '962142', '7795297', '7341464', '5594916', '1550003'], 'type': 'ETH'}, {'items': ['11013331', '9843236'], 'type': 'KAT'}]


It is also possible with itertools.groupby but it requires the input to be sorted first.

>>> sorted_input = sorted(input, key=itemgetter(1))
>>> groups = groupby(sorted_input, key=itemgetter(1))
>>> [{'type':k, 'items':[x[0] for x in v]} for k, v in groups]
[{'items': ['5238761', '5349618', '962142', '7795297', '7341464', '5594916', '1550003'], 'type': 'ETH'}, {'items': ['11013331', '9843236'], 'type': 'KAT'}, {'items': ['9085267', '11788544'], 'type': 'NOT'}]

Note both of these do not respect the original order of the keys. You need an OrderedDict if you need to keep the order.

>>> from collections import OrderedDict
>>> res = OrderedDict()
>>> for v, k in input:
...   if k in res: res[k].append(v)
...   else: res[k] = [v]
... 
>>> [{'type':k, 'items':v} for k,v in res.items()]
[{'items': ['11013331', '9843236'], 'type': 'KAT'}, {'items': ['9085267', '11788544'], 'type': 'NOT'}, {'items': ['5238761', '5349618', '962142', '7795297', '7341464', '5594916', '1550003'], 'type': 'ETH'}]


from operator import itemgetter
sortkeyfn = itemgetter(1)
input = [('11013331', 'KAT'), ('9085267', 'NOT'), ('5238761', 'ETH'), 
 ('5349618', 'ETH'), ('11788544', 'NOT'), ('962142', 'ETH'), ('7795297', 'ETH'), 
 ('7341464', 'ETH'), ('9843236', 'KAT'), ('5594916', 'ETH'), ('1550003', 'ETH')] 
input.sort(key=sortkeyfn)

from itertools import groupby
result = []
for key,valuesiter in groupby(input, key=sortkeyfn):
    result.append(dict(type=key, items=list(v[0] for v in valuesiter)))
    
result = {}
for key,valuesiter in groupby(input, key=sortkeyfn):
    result[key] = list(v[0] for v in valuesiter)

result now contains this dict (this is similar to the intermediate res defaultdict in @KennyTM's answer):

{'NOT': ['9085267', '11788544'], 
 'ETH': ['5238761', '5349618', '962142', '7795297', '7341464', '5594916', '1550003'], 
 'KAT': ['11013331', '9843236']}

(If you want to reduce this to a one-liner, you can:

result = dict((key,list(v[0] for v in valuesiter)
              for key,valuesiter in groupby(input, key=sortkeyfn))

or using the newfangled dict-comprehension form:

result = {key:list(v[0] for v in valuesiter)
              for key,valuesiter in groupby(input, key=sortkeyfn)}    


# given a sequence of tuples like [(3,'c',6),(7,'a',2),(88,'c',4),(45,'a',0)],
# returns a dict grouping tuples by idx-th element - with idx=1 we have:
# if merge is True {'c':(3,6,88,4),     'a':(7,2,45,0)}
# if merge is False {'c':((3,6),(88,4)), 'a':((7,2),(45,0))}
def group_by(seqs,idx=0,merge=True):
    d = dict()
    for seq in seqs:
        k = seq[idx]
        v = d.get(k,tuple()) + (seq[:idx]+seq[idx+1:] if merge else (seq[:idx]+seq[idx+1:],))
        d.update({k:v})
    return d
group_by(input,1)

```

## get indices

```
def indices(l, val):
...     """Always returns a list containing the indices of val in the_list"""
...     return [index for index, value in enumerate(l) if value == val]
... 
>>> l = ['bar','foo','bar','baz','bar','bar']
>>> q = 'bar'
>>> print indices(l,q)
[0, 2, 4, 5]
>>> print indices(l,'bat')
[]
>>> print indices('abcdaababb','a'
```

### python 读取文件 splite list with open file of file input \ufeff  error

```
k1 = [line.strip().encode('utf-8').decode('utf-8-sig') for line in fileinput.input(fnl)]

for k, v in d.items():
    print(k, v,)

z = {**d, **d2}

```

##  set diff

```
def diff(first, second):
        second = set(second)
        return [item for item in first if item not in second]

>>> diff(A, B)
[1, 3, 4]
>>> diff(B, A)
[5]
>>> 

set([1,2,3,4]) - set([2,5])
set([1, 4, 3])
>>> set([2,5]) - set([1,2,3,4])
set([5])

>>> a = [1,2]
>>> b = [1,3,5,6]
>>> list(set(a) - set(b))
[2]
>>> list(set(b) - set(a))
[3, 5, 6]


```

## sort a dictionary by value

```
x = {1: 2, 3: 4, 4: 3, 2: 1, 0: 0}
sorted_by_value = sorted(x.items(), key=lambda kv: kv[1])
```


## make each key-value of a dictionary print on a new line print-a-dictionary-line-by-line-in-python

```
print("{" + "\n".join("{}: {}".format(k, v) for k, v in d.items()) + "}")

import pprint
pprint.pprint({'avglen': 4.419354838709677, 
               'count:': 93,
               'mosts:': 'your',
               'longs:': ['stretched'],
               'shorts:': ['i', 'a'],})
```
## split with multi delimiters

```
import re
text = 'The quick brown\nfox jumps*over the lazy dog.'
text = '23.宿 ①sù宿舍 宿愿 宿志 宿将 耆宿 宿舍 宿主 ②xiǔ三天两宿 半宿 ③xiù星宿 二十八宿'
print(re.split('; |, |\*|\n',text))

delimiters = "①", "②", "③"
>>> regexPattern = '|'.join(map(re.escape, delimiters))
>>> regexPattern
'\\①|\\②|\\③'
>>> re.split(regexPattern, text)
[line.strip().replace(',', '.').split('.')[-1].strip() for line in fileinput.input(fn1)] 
```


## PyQt return key Pressed

http://qt-project.org/doc/qt-4.8/qlineedit.html#returnPressed

QLineEdit has a returnPressed signal. 
self.search_lineEdit.returnPressed.connect(self.search_slot)


## merge two dict

```
{k: v for k, v in points.items() if v[0] < 5 and v[1] < 5}

''.join([x[0] for x in myList])
>>> ['b', 's', 't']  

dic2 = dict(dic0, **dic1)

Or if you're happy to use one of the existing dicts:

dic0.update(dic1)
```


## find repeat items:

```
l = [1,2,3,4,4,5,5,6,1]
>>> set([x for x in l if l.count(x) > 1])
set([1, 4, 5])

```


## beautifulsoup

```
print(type(a[1][0]))
<class 'bs4.element.Tag'>

for tr in tables:
    cols = tr.find('a', href=True)
    
    #print(cols.get_text())


```


## Remove duplicates in a list while keeping its order 

```
mylist = ['c','a','a','b','a','b','c']
>>> sorted(set(mylist), key=lambda x: mylist.index(x))
['c', 'a', 'b']

def unique( seq ):
    seen = set()
    for item in seq:
        if item not in seen:
            seen.add( item )
            yield item

biglist[:] = unique( biglist )

```

## Check if a given key already exists in a dictionary

```

in is the intended way to test for the existence of a key in a dict.

d = dict()

for i in xrange(100):
    key = i % 10
    if key in d:
        d[key] += 1
    else:
        d[key] = 1

If you wanted a default, you can always use dict.get():

d = dict()

for i in xrange(100):
    key = i % 10
    d[key] = d.get(key, 0) + 1

... and if you wanted to always ensure a default value for any key you can use defaultdict from the collections module, like so:

from collections import defaultdict

d = defaultdict(lambda: 0)

for i in xrange(100):
    d[i % 10] += 1

... but in general, the in keyword is the best way to do it.


d = {'a': [1,2], 'b': [5, 6]}
d1 = {'a': [3, 4], 'b': [7]}

for k, v in d1.items():
    if k in d:
        d[k] += v

print(d)

{'a': [1, 2, 3, 4], 'b': [5, 6, 7]}

```

## input a regex in string.replace

```
import re
line = re.sub(r"</?\[\d+>", "", line)

Edit: Here's a commented version explaining how it works:

line = re.sub(r"""
  (?x) # Use free-spacing mode.
  <    # Match a literal '<'
  /?   # Optionally match a '/'
  \[   # Match a literal '['
  \d+  # Match one or more digits
  >    # Match a literal '>'
  """, "", line)


a = "安步当车an1'bu4'dang4'che153104"
import re
line = re.sub(r"[0-9]", "", a)
>>> line
"安步当车an'bu'dang'che"
 
```  

##  sort (list/tuple) of lists/tuples?
https://stackoverflow.com/questions/3121979/how-to-sort-list-tuple-of-lists-tuples?answertab=active#tab-top
```
l = ['25539_暗里', '30787_按理', '48995_按例', '7184_案例']

data = [i.split('_') for i in l]

l1 = list(sorted(data, key=lambda tup:(tup[1], tup[0]),reverse=True))
[['7184', '案例'], ['25539', '暗里'], ['30787', '按理'], ['48995', '按例']]

from operator import itemgetter
l2 = [(int(i[0]), i[1]) for i in l]
sorted(l2, key=itemgetter(0))

```
