# PHP

## Install PHP 5..5.0

```bash
    apt-get install libxml2-dev
    tar xjf php-5.5.0RC3.tar.bz2
    cd php-5.5.0RC3
    ./configure --prefix=/home/php
    make
    make install
    ln -s /home/php/bin/php /usr/bin/php
    cp php.ini-production /home/php/lib/php.ini
    nano /home/php/lib/php.ini
    php -S 0.0.0.0:8080 -t /home/mike/t/project/3d.gdk.mx
```

## Run PHP  Built-in web server 

    ```php -S 0.0.0.0:8080 -t /home/web```


## Add php GD library

```bash
    tar xvfJ php-5.5.0RC3.tar.xz
    cd php-5.5.0RC3/ext/gd
    /home/php/bin/phpize      
    ./configure  --with-gd=shared --with-jpeg-dir=/usr --with-zlib --with-php-config=/home/php/bin/php-config
    make
    find -name "gd.so"
    cp /home/lear/download/php-5.5.0RC3/ext/gd/modules/gd.so /home/php/lib/php/extensions
    
    gedit /home/php/lib/php.ini
    ; Dynamic Extensions ;
    extension=/home/php/lib/php/extensions/gd.so
```


## apache2

```bash
sudo geany1/bin/geany /etc/apache2/apache2.conf

<Directory "/home/mike/www">
    Options Indexes FollowSymLinks
    AllowOverride none
    Require all granted
</Directory>

sudo nano /etc/apache2/sites-available/000-default.conf

        ServerAdmin webmaster@localhost
        DocumentRoot /home/mike/www 
 
  sudo /etc/init.d/apache2 start 
``` 
