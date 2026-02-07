function Footer({ completedTasksCount = 0, activeTasksCount = 0 }) {
    return (
        <>
            {completedTasksCount + activeTasksCount > 0 && (
                <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                        {completedTasksCount > 0 && (
                            <>
                                🎉 Great! You've completed {completedTasksCount}{' '}
                                task{completedTasksCount > 1 ? 's' : ''}
                                {activeTasksCount > 0 &&
                                    `, and ${activeTasksCount} more to go. Keep it up!`}
                            </>
                        )}

                        {completedTasksCount === 0 && activeTasksCount > 0 && (
                            <>
                                Ready to start? You have {activeTasksCount} task
                                {activeTasksCount > 1 ? 's' : ''} waiting!
                            </>
                        )}
                    </p>
                </div>
            )}
        </>
    );
}
export default Footer;
