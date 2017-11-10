log.info(`Application ${app.name}-${app.version} started.`);


__.disposer(() => {
    log.info(`Application ${app.name}-${app.version} stopped.`);
}); // disposer
