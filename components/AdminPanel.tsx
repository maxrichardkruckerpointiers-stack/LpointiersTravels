
import React, { useState } from 'react';
import { useData } from '../contexts/DataContext';
import { X, Lock, Save, RotateCcw, Image, DollarSign, Edit3, LogOut } from 'lucide-react';

interface AdminPanelProps {
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onClose }) => {
  const { tours, islands, updateTour, updateIsland, resetData } = useData();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'tours' | 'islands'>('tours');
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form states
  const [editForm, setEditForm] = useState<any>({});

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const startEdit = (item: any) => {
    setEditingId(item.id);
    setEditForm({ ...item });
  };

  const handleSave = () => {
    if (activeTab === 'tours') {
      updateTour(editingId!, editForm);
    } else {
      updateIsland(editingId!, editForm);
    }
    setEditingId(null);
  };

  const handleLogoutDevice = () => {
    if (window.confirm('¿Seguro que quieres ocultar el menú admin de este dispositivo?')) {
        localStorage.removeItem('ecoexplorer_admin_unlocked');
        window.location.reload();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-red-500">
            <X size={24} />
          </button>
          <div className="text-center mb-6">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-800">
              <Lock size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Admin Login</h2>
            <p className="text-gray-500 text-sm">Ingrese contraseña para editar.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none"
              placeholder="Password..."
            />
            <button type="submit" className="w-full bg-emerald-900 text-white py-3 rounded-lg font-bold hover:bg-emerald-800 transition-colors">
              Entrar / Login
            </button>
          </form>
          <div className="mt-4 text-center text-xs text-gray-400">
            Hint: admin123
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-emerald-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <Edit3 className="text-emerald-400" />
          <h1 className="text-xl font-bold hidden sm:block">Admin Panel - EcoExplorer</h1>
        </div>
        <div className="flex gap-2 sm:gap-4">
          <button 
            onClick={handleLogoutDevice}
            className="flex items-center gap-2 text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-2 rounded-lg transition-colors border border-gray-700"
            title="Ocultar Admin en este PC"
          >
            <LogOut size={16} /> <span className="hidden sm:inline">Ocultar Panel</span>
          </button>
          <button 
            onClick={() => { if(window.confirm('Reset all data to defaults?')) resetData(); }}
            className="flex items-center gap-2 text-sm bg-red-500/20 hover:bg-red-500 text-red-100 px-3 py-2 rounded-lg border border-red-500/50 transition-colors"
          >
            <RotateCcw size={16} /> <span className="hidden sm:inline">Reset</span>
          </button>
          <button onClick={onClose} className="bg-white/10 hover:bg-white/20 p-2 rounded-full">
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-20 sm:w-64 bg-white border-r border-gray-200 flex flex-col">
          <button 
            onClick={() => setActiveTab('tours')} 
            className={`p-4 text-left font-semibold border-b flex flex-col sm:flex-row items-center sm:gap-2 ${activeTab === 'tours' ? 'bg-emerald-50 text-emerald-800 border-l-4 border-l-emerald-600' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <Edit3 size={20} className="sm:hidden mb-1" />
            <span className="text-xs sm:text-base">Tours</span>
          </button>
          <button 
            onClick={() => setActiveTab('islands')} 
            className={`p-4 text-left font-semibold border-b flex flex-col sm:flex-row items-center sm:gap-2 ${activeTab === 'islands' ? 'bg-emerald-50 text-emerald-800 border-l-4 border-l-emerald-600' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <Image size={20} className="sm:hidden mb-1" />
            <span className="text-xs sm:text-base">Islas</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* List */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-800 mb-6">
                Editando: {activeTab === 'tours' ? 'Tours Principales' : 'Islas & Playas'}
              </h2>
              
              {(activeTab === 'tours' ? tours : islands).map((item: any) => (
                <div 
                  key={item.id} 
                  onClick={() => startEdit(item)}
                  className={`bg-white p-4 rounded-xl shadow-sm border cursor-pointer transition-all hover:shadow-md flex gap-4 items-center ${editingId === item.id ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-gray-200'}`}
                >
                  <img src={item.image} alt="" className="w-16 h-16 rounded-lg object-cover bg-gray-100" />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-sm sm:text-base">{item.title || item.name}</h3>
                    <p className="text-emerald-600 font-medium text-sm">${item.price} USD</p>
                  </div>
                  <Edit3 size={16} className="text-gray-400" />
                </div>
              ))}
            </div>

            {/* Editor */}
            <div className="xl:sticky xl:top-8 h-fit">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
                {editingId ? (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center mb-4 border-b pb-4">
                      <h3 className="font-bold text-lg text-gray-800">Editar Item</h3>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">ID: {editingId}</span>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre / Título</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                        value={editForm.title || editForm.name || ''}
                        onChange={(e) => setEditForm({...editForm, [activeTab === 'tours' ? 'title' : 'name']: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                         <DollarSign size={14} /> Precio (USD)
                      </label>
                      <input 
                        type="number" 
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                        value={editForm.price || 0}
                        onChange={(e) => setEditForm({...editForm, price: Number(e.target.value)})}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                         <Image size={14} /> URL Imagen
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-xs"
                        value={editForm.image || ''}
                        onChange={(e) => setEditForm({...editForm, image: e.target.value})}
                      />
                      {editForm.image && (
                        <div className="mt-2 h-32 w-full rounded-lg overflow-hidden border">
                          <img src={editForm.image} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row gap-3">
                      <button 
                        onClick={handleSave}
                        className="flex-1 bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors flex justify-center items-center gap-2"
                      >
                        <Save size={18} /> Guardar
                      </button>
                      <button 
                        onClick={() => setEditingId(null)}
                        className="px-6 py-3 border border-gray-300 rounded-xl font-bold hover:bg-gray-50 text-gray-600"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-400 py-12 flex flex-col items-center">
                    <Edit3 size={48} className="mb-4 opacity-20" />
                    <p>Seleccione un item para editar.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
