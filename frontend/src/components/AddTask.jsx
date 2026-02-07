import { useState } from 'react';
import { toast } from 'sonner';
import { Plus } from 'lucide-react';

import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import api from '@/lib/axios';

function AddTask({ handleNewTaskAdded }) {
    const [newTaskTitle, setNewTaskTitle] = useState('');

    const addTask = async () => {
        if (!newTaskTitle.trim()) {
            toast.error("You need to enter the task's title.");
        }

        try {
            await api.post('/tasks', {
                title: newTaskTitle,
            });

            toast.success(`${newTaskTitle} is added to your list.`);
            handleNewTaskAdded();
        } catch (error) {
            console.error('Error occurred when adding new task.', error);
            toast.error('Error occurred when adding new task.');
        }

        setNewTaskTitle('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    };

    return (
        <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
            <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                    type="text"
                    placeholder="What do you need to do?"
                    className="h-12 text-base bg-slate-50 sm:flex-1 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    onKeyPress={handleKeyPress}
                />

                <Button
                    variant="gradient"
                    size="xl"
                    className="px-6"
                    onClick={addTask}
                    disabled={!newTaskTitle.trim()}
                >
                    <Plus className="size-5" />
                    Add
                </Button>
            </div>
        </Card>
    );
}
export default AddTask;
