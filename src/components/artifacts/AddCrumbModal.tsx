import React, { useState } from 'react';
import { NewCrumbFormData } from '../../types';
import { Modal } from '../common/Modal';
import { BittenTerminalMark } from '../common/BittenTerminalMark';
import { FormField } from '../forms/FormField';
import { Input } from '../forms/Input';
import { Select } from '../forms/Select';
import { Textarea } from '../forms/Textarea';
import { Button } from '../common/Button';
import { YEARS, CRUMB_CATEGORIES } from '../../data/artifacts';

export interface AddCrumbModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (data: NewCrumbFormData) => void;
}

const INITIAL_FORM: NewCrumbFormData = {
  title: '',
  year: '2026',
  category: 'AI STUDIO',
  description: '',
  tags: 'GEMINI API, REACT',
  about: '',
  url: 'https://',
};

export const AddCrumbModal: React.FC<AddCrumbModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [form, setForm] = useState<NewCrumbFormData>(INITIAL_FORM);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.title.trim()) return;

    onAdd(form);
    setForm(INITIAL_FORM);
    onClose();
  };

  const handleClose = () => {
    setForm(INITIAL_FORM);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      icon={<BittenTerminalMark size={22} />}
      title="Log New Artifact to [code] crumbs"
      maxWidth="md"
    >
      <form onSubmit={handleSubmit} className="space-y-3.5">
        <FormField label="Title" required>
          <Input
            type="text"
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="e.g. Prompt Latency Benchmark"
          />
        </FormField>

        <div className="grid grid-cols-2 gap-2.5">
          <FormField label="Year">
            <Select
              value={form.year}
              onChange={(e) => setForm({ ...form, year: e.target.value })}
            >
              {YEARS.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </Select>
          </FormField>

          <FormField label="Category">
            <Select
              value={form.category}
              onChange={(e) =>
                setForm({
                  ...form,
                  category: e.target.value as NewCrumbFormData['category'],
                })
              }
            >
              {CRUMB_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Select>
          </FormField>
        </div>

        <FormField label="Tags (comma-separated)">
          <Input
            type="text"
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
            placeholder="REACT, TYPESCRIPT, VITE"
          />
        </FormField>

        <FormField label="Description">
          <Textarea
            rows={2}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="1-2 lines explaining what the artifact does..."
          />
        </FormField>

        <FormField label="About the Crumb">
          <Input
            type="text"
            value={form.about}
            onChange={(e) => setForm({ ...form, about: e.target.value })}
            placeholder="Single sentence on context or inspiration..."
          />
        </FormField>

        <FormField label="External URL">
          <Input
            type="url"
            value={form.url}
            onChange={(e) => setForm({ ...form, url: e.target.value })}
            placeholder="https://..."
          />
        </FormField>

        <div className="pt-2 flex justify-end gap-2">
          <Button variant="ghost" size="md" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" size="md" type="submit">
            Save Crumb
          </Button>
        </div>
      </form>
    </Modal>
  );
};

