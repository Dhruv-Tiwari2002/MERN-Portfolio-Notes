import { useState, useEffect } from 'react';
import { fetchNotes, createNote, deleteNote, updateNote } from '../api'; 

const Dashboard = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [noteData, setNoteData] = useState({ title: '', content: '' });
    const [editingId, setEditingId] = useState(null); 

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = async () => {
        try {
            const { data } = await fetchNotes();
            setNotes(data);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching notes:", err);
            setLoading(false); 
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                // --- UPDATE LOGIC ---
                const { data } = await updateNote(editingId, noteData);
                setNotes(notes.map((note) => (note._id === editingId ? data : note)));
                setEditingId(null); 
            } else {
                // --- CREATE LOGIC ---
                const { data } = await createNote(noteData);
                setNotes([...notes, data]);
            }
            setNoteData({ title: '', content: '' }); 
        } catch (err) {
            console.error("Error saving note:", err);
        }
    };

    const handleEditClick = (note) => {
        setNoteData({ title: note.title, content: note.content }); 
        setEditingId(note._id); 
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    };

    const handleDelete = async (id) => {
        try {
            await deleteNote(id);
            setNotes(notes.filter((note) => note._id !== id));
        } catch (err) {
            console.error("Error deleting note:", err);
        }
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setNoteData({ title: '', content: '' });
    };

    // Dark Theme Loading State
    if (loading) return (
        <div className="flex justify-center items-center min-h-[50vh]">
            <h2 className="text-2xl font-bold text-gray-400 animate-pulse">Loading your notes...</h2>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 w-full text-white">
            <h1 className="text-4xl font-bold text-center mb-10 text-green-500">Your Dashboard</h1>

            {/* --- Centered Form Section --- */}
            <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-2xl mb-16 border border-gray-700 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                    {editingId ? "Update Note" : "Add a New Note"}
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                    <input 
                        type="text" 
                        placeholder="Title" 
                        value={noteData.title}
                        onChange={(e) => setNoteData({ ...noteData, title: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                        required 
                    />
                    <textarea 
                        placeholder="Write your note content here..." 
                        value={noteData.content}
                        onChange={(e) => setNoteData({ ...noteData, content: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition min-h-[120px] resize-y"
                        required 
                    />
                    
                    <div className="flex gap-4 pt-2">
                        <button 
                            type="submit" 
                            className={`flex-1 py-3 rounded-lg text-white font-bold transition shadow-lg ${
                                editingId ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
                            }`}
                        >
                            {editingId ? "Update Note" : "Save Note"}
                        </button>
                        
                        {editingId && (
                            <button 
                                type="button" 
                                onClick={handleCancelEdit} 
                                className="flex-1 bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 rounded-lg transition shadow-lg"
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </div>

            {/* --- Centered Notes Grid --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {notes.length > 0 ? (
                    notes.map((note) => (
                        <div key={note._id} className="bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700 w-full max-w-sm flex flex-col items-center text-center group hover:-translate-y-1 transition duration-300">
                            <h3 className="text-2xl font-bold text-green-500 mb-3 w-full break-words">{note.title}</h3>
                            <p className="text-gray-300 mb-6 flex-grow whitespace-pre-wrap w-full break-words leading-relaxed">{note.content}</p>
                            
                            <div className="flex justify-center gap-6 border-t border-gray-700 pt-5 mt-auto w-full">
                                <button 
                                    onClick={() => handleEditClick(note)}
                                    className="text-blue-400 hover:text-blue-300 font-semibold transition"
                                >
                                    Edit
                                </button>
                                <button 
                                    onClick={() => handleDelete(note._id)}
                                    className="text-red-500 hover:text-red-400 font-semibold transition"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full w-full text-center py-16 bg-gray-800 rounded-xl border-2 border-dashed border-gray-600">
                        <p className="text-gray-400 text-xl font-medium">No notes found. Try creating your first note above!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;