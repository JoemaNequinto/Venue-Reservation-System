#!/bin/bash


echo "Installing npm dependencies..."
#npm install
sudo npm install

echo -en "Choose one: \n [1] Only update schema/database \n [2] Create user and Update schema/database \n [3] Exit\nChoice: "
read choice

    if [[ $choice -eq 2 ]]; then
        echo "Creating user and database..."

        echo -n "[root] "
        mysql -uroot -p < backend/database/create.sql #creates user 'OplanBulacs' with a password uv2l

    elif [[ $choice -eq 1 ]]; then
        echo ""
    else
        exit

    fi

echo "Inserting schema into the database..."
mysql -udatababes -pdatababes < backend/database/schema.sql #creates the tables in the database PROJECT

echo "Start!"
