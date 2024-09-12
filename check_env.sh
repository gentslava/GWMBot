ENV=./.env
ENV_DIST=./.env.dist

if [ -f "$ENV" ]; then
    echo "config file exists."
else
    cp $ENV_DIST $ENV
    echo "config file created."
fi
