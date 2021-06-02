const schedule = require('node-schedule');

const task1 = schedule.scheduleJob('*/5 * 19 * * 3', function () {
    console.log('Running Task 1!', new Date().getSeconds());
});

setTimeout(function () {
    task1.cancel();
    console.log('Canceling Task 1!');
}, 20000);

// setImmediate
// setInterval

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 5)];
rule.hour = 19;
rule.second = 30;

const task2 = schedule.scheduleJob(rule, function () {
    console.log('Running Task 2!', new Date().getSeconds());
});